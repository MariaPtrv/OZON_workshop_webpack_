import _ from 'lodash';

let div = document.querySelector('div.route');
div.textContent = _.join(['Hello', 'webpack'], ' ');
