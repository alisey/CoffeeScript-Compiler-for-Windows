:: Ask for a coffee file and a ouput name
@echo off
echo CoffeeScript Compiler for Windows
set /p sourcefile=What is the filename: 
set /p targetfile=What is the outputname: 
"%~dp0coffee\jshost.exe" -u "%~dp0coffee\coffee-helper.js" %sourcefile% %targetfile%
