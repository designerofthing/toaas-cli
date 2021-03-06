## Thomas Ochman quotes

**Like gold dust, these inspirational quotes will start your cli baby up**

### Installation

Clone the repo to your localhost using:

```
$ git clone https://github.com/designerofthing/toaas-cli.git && cd toaas-cli
```

Install the package (from within the project folder):

```
$ npm install -g .
```

### Usage

Simple:

```
$ toaas -n Faraz
Here's a random Thomas Ochman quote to inspire you Faraz:
Grab the Low hanging fruit!
```
If you would like a new quote everytime you open a terminal window:

add the following code to the bottom of your .zlogin file (for zsh users) or the top of your .bashrc file (for bash users).
```
toaas -n <Your name>
```

### Uninstall

If you want to remove the package, just uninstall it using `npm`:

```
$ npm uninstall -g toaas-cli
```

**This is heavily based on Thomas Ochman's Chuck Norris CLI https://github.com/tochman/chuck-cli.git, it is meant as a homage not plagiarism**

License
--------------

Released under the [MIT License](http://opensource.org/licenses/MIT).