"start": "npm-run-all -p nodemon browsersync",
"nodemon": "nodemon server.js",
"browsersync": "browser-sync start --proxy http://localhost:5003 --files 'public,views'"