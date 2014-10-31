/**
 * Copyright 2014 Openstack.org
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
//<script type="text/javascript" src="/themes/openstack/javascript/jquery.ticker.js"></script>
//<script type="text/javascript" src="/themes/openstack/javascript/jquery.colorbox-min.js"></script>

jQuery(document).ready(function($) {
  // Add transitions for quotes
  $('#quotes').list_ticker({
    speed:8000,
    effect:'fade'
  });

  $('a.screenshots').colorbox({rel:'gal'});
  $(".vimeo").colorbox({iframe:true, innerWidth:800, innerHeight:530});

});
