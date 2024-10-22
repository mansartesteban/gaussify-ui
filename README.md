# Gaussify UI

This repo is for the moment a POC and a sandbox

# Presentation

Gaussify UI is a fully customizable UI Framework made with Sass. I know, you probably think "yet another UI Framework" and ... uh ... that's correct except that uh ... no, everyone says that !

So let's dive into the main purpose of Gaussify UI Framework, the two main concepts of this framework are :

## Fully customisable

You can dynamically change in scss custom files the way css classes are generated ! What does it mean ? Ok, let's suppose we use a classic UI framework (bootstrap, tailwind, bulma ...), when you want to apply margin or elevation, you have to use the classes they made with their limitations. Maybe you are familiar with .elevation-4, or .mt-2 notations ? When the framework have, we will say, 8 levels of a class but you would like to use the ninth level ... argh ! This is pretty fastidious to create your own class by examinating the source code of the framework to keep it consistent between your own and their.

What Gaussify UI is used to is this : By changing a variable, you can indicate how many levels you would like to have for a particular class. But that's not all, you can also customize the min and max value of each generated class ! Moreover, you can change the progression curve of generated steps (which bring us to second point)

## Mathematics are awesome !

The way that each step of classes are generated can be modified with mathematics. When you use main frameworks, each steps is predefined (probably by ui/ux design teams) and probably have linear progression curve. With Gaussian UI you can specify custom mathematical functions. Some are already difined in the framework like : Gaussian (the first implemented function), Linear, Fibonacci ...). But what is really really cool with Gaussian UI is that because all is fully customizable, you can also provide your own mathematical functions !
The result could be something like this :

> Values will be approximated in these exemples as i do it by head

LINEAR (min: 1, max: 50, steps: 6) :
- .m-1 { margin: 1px ;}
- .m-2 { margin: 10px ;}
- .m-3 { margin: 20px ;}
- .m-4 { margin: 30px ;}
- .m-5 { margin: 40px ;}
- .m-6 { margin: 50px ;}

FIBONACCI (min: 1, max: 55, steps: 9) :
- .m-1 { margin: 1px ;}
- .m-2 { margin: 2px ;}
- .m-3 { margin: 3px ;}
- .m-4 { margin: 5px ;}
- .m-5 { margin: 8px ;}
- .m-6 { margin: 13px ;}
- .m-7 { margin: 21px ;}
- .m-8 { margin: 34px ;}
- .m-9 { margin: 55px ;}

BEZIER (min: 1, max: 26, steps: 10) :
- .m-1 { margin: 1px ;}
- .m-2 { margin: 2px ;}
- .m-3 { margin: 4px ;}
- .m-4 { margin: 7px ;}
- .m-5 { margin: 11px ;}
- .m-6 { margin: 16px ;}
- .m-7 { margin: 20px ;}
- .m-8 { margin: 23px ;}
- .m-9 { margin: 25px ;}
- .m-10 { margin: 26px ;}
