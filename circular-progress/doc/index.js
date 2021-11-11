import '@aodocs/circular-progress';
import '@aodocs/circular-progress-four-color';
import '@aodocs/button';

import '../../shared/doc/demo-header';

window.toggle.onclick = function() {
  window.progress1.closed = !window.progress1.closed;
};

addEventListener('load', function() {
  document.body.classList.remove('unresolved');
});
