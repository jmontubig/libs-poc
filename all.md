## Angular Library

The angular library helps us compartmentalized components that this library will support.
Initial reusable component structure can be:

	<feature_name>
	 |- components
	 |- entities
	 |- data-access
	 |- services
	 |- constants

This is an initial folder structure but devs can create new folder that suits their needs. The important part is the organization of the elements inside the feature being developed.


### Development workflow

The main source codes for the library is located at the `projects` folder.
And necessary build scripts are located at the package.json:

`npm run build`
Build the library for production and ready for publishing.

`npm run release`
Run this command whenever you want to release a new version of the library.
This command will:

- bump the version of the library, 
- generates a changelog based on the commits, 
- creates a new commit 
- and a new tag version along with it.



