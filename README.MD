npm start to run a webserver: localhost:8080
to build a distributable run: webpack
when developing locally turn off $locationProvider.html5Mode(true); in index.routes.js


https://github.com/A-Tokyo/generator-at-angular

yo at-angular                                                # Generates an angular appplication
yo at-angular:page my-page                                   # Generates a page (partial)
yo at-angular:service my-service                             # Generates a service
yo at-angular:service my-component/my-service                # Generates a service in a component
yo at-angular:directive my-directive                         # Generates a shared directive
yo at-angular:directive my-component/my-directive            # Generates a directive in a component
yo at-angular:component my-component                         # Generates a component
yo at-angular:component my-component/my-nested-component     # Generates a nested component
yo at-angular:component my-component/my-nested-component/... # Generates a multiple nested component
yo at-angular:remove                                         # Runs the at removal tool to remove a generated item