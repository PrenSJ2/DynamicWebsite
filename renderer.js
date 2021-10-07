
//Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string

var fs = require("fs");


    function mergeValues(values, content) {
        // cycle over keyes
        for(var key in values){
        //replace all{{key}} with the value from the values object
            content = content.replace("{{" + key +"}}", values[key]);
        }
        //return merged content
        return content
    }


    function view(templateName, values, response) {
        // read from the template file
        var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
        //insert values into the content
        fileContents = mergeValues(values, fileContents);
        //write our the contents to the response
        response.write(fileContents);

    }

    module.exports.view = view;