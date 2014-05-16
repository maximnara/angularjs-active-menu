AngularJs active menu
=================

Create interactive menu in angularjs app.

## Demo
![alt tag](https://www.dropbox.com/s/o56xfmfnrpdo395/ScreenFlow%20%281%29.gif)

__My AngularJs ver. 1.2.16__

## Instalation
* Include angular-active-menu.js in your index.html
* Add ```angularActiveMenu``` into depedency list. Like this ``` angular.module('myApp', ['angularActiveMenu']);  ```

## How to use
Insert __us-active-menu__ tag in menu element like this ```<button us-active-menu="MainCtrl">Menu Item</button>```. 

__MainCtrl__ it's controller name. If your menu item should be active on different controllers you can specify them as an array, like: ```us-active-menu="['MainCtrl', 'SettingsCtrl', 'FriendsCtrl']"```.

Directive will add class __active__ on element when current controller and specified will be equal.

## Full example
```
<nav>
	<a href="#/main">
		<button us-active-menu="MainCtrl">Main</button>
	</a>
	<a href="#/friends">
		<button us-active-menu="FriendsCtrl">Friends</button>
	</a>
	<a href="#/settings">
		<button us-active-menu="['SettingsCtrl', 'SettingCtrl']">Settings</button>
	</a>
</nav>
```

You can write me for any reason - maximnara@gmail.com.