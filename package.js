Package.describe({
  name: 'poetic:jquery.appear',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for jQuery.appear',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/meteor-jquery.appear',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'jquery-appear-poetic': '0.3.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');
  api.addFiles('.npm/package/node_modules/jquery-appear-poetic/jquery.appear.js', 'client');
});
