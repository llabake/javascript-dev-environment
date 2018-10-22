/* This file contains references to vendor libraries 
we're using in this project. This is used by webpack 
in the production build only*. A separate bundle for vendor
code is useful since it's unlikely to as often
as the application's code. So all the libraries we reference 
here will be written to vendor.js so they can be
cached until one of them change. So basically, this avoids
customers having to download a juge JS file anytime a line
pf code changes. They only have to dowload vendor.js when 
a vendor library changes which shoiuld be less frequent.
Any files that aren't referenced here will be bundled into
main.js for the production build
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';