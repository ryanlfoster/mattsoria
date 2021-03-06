<?php

class Plugin_raven extends Plugin {

  public $meta = array(
    'name'       => 'Raven',
    'version'    => '1.1',
    'author'     => 'Statamic',
    'author_url' => 'http://statamic.com'
  );

  /**
   * Raven form tag pair
   *
   * {{ raven:form }} {{ /raven:form }}
   *
   * @return string
   */
  public function form()
  {
    /*
    |--------------------------------------------------------------------------
    | Formset
    |--------------------------------------------------------------------------
    |
    | Raven really needs a formset to make it useful and secure. We may even
    | write a form decorator in the future to generate forms from formsets.
    |
    */

    $formset = $this->fetchParam('formset', false);
    $return  = $this->fetchParam('return', false);

    // Sanitize data before returning it for display
    $data = array('value' => filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING));

    /*
    |--------------------------------------------------------------------------
    | Form HTML
    |--------------------------------------------------------------------------
    |
    | Raven writes a few hidden fields to the form to help processing data go
    | more smoothly. Form attributes are accepted as colon/piped options:
    | Example: attr="class:form|id:contact-form"
    |
    | Note: The content of the tag pair is inserted back into the template
    |
    */

    $attributes_string = '';

    if ($attr = $this->fetchParam('attr', false)) {
      $attributes_array = Helper::explodeOptions($attr, true);
      foreach ($attributes_array as $key => $value) {
        $attributes_string .= " {$key}='{$value}'";
      }
    }

    $html  = "<form method='post' {$attributes_string}>\n";
    $html .= "<input type='hidden' name='hidden[raven]' value='true' />\n";
    $html .= "<input type='hidden' name='hidden[formset]' value='{$formset}' />\n";
    if ($return) {
      $html .= "<input type='hidden' name='hidden[return]' value='{$return}' />\n";
    }

    /*
    |--------------------------------------------------------------------------
    | Hook: Form Begin
    |--------------------------------------------------------------------------
    |
    | Occurs in the middle the form allowing additional fields to be added.
    | Has access to the current fieldset. Must return HTML.
    |
    */

    $html .= Hook::run('raven', 'inside_form', 'cumulative', '');

    /*
    |--------------------------------------------------------------------------
    | Hook: Content Preparse
    |--------------------------------------------------------------------------
    |
    | Allows the modification of the tag data inside the form. Also has access
    | to the current formset.
    |
    */

    $html .= Hook::run('raven', 'content_preparse', 'replace', $this->content, $this->content);

    $html .= "</form>";

    return Parse::Template($html, $data);

  }

  /**
   * Returns true or false based on form success
   *
   * Set in hooks.raven.php -> process()
   *
   * @return bool
   **/
  public function success()
  {
    $raven = Config::get('raven', false);

    return array_get($raven, 'success', false);
  }

  /**
   * Returns an array if errors are present, false if not
   *
   * Set in hooks.raven.php -> process()
   *
   * @return mixed
   **/
  public function errors()
  {
    if ($errors = Config::get('raven')) {
      return Parse::template($this->content, $errors);
    }

    return false;
  }

  public function has_errors()
  {
    if ($errors = Config::get('raven')) {
      if (is_array(array_get($errors, 'invalid')) || is_array(array_get($errors, 'missing'))) {
        return true;
      }
    }

    return false;
  }

}
