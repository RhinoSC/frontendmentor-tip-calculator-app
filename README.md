# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop](https://i.imgur.com/dJQhybC.png)
![Mobile](https://i.imgur.com/x8U6wxx.png)

### Links

- Solution URL: [Here](https://www.frontendmentor.io/solutions/mobile-first-using-html-sass-and-js-VCd5RrPCP)
- Live Site URL: [Here](https://rhiino1.github.io/frontendmentor-tip-calculator-app/)

## My process

This was a good project, i expected had less problems but was really fun to make. Actually, it was more time that i was waiting for because some styling was kinda hard. The JS part of this project was really easy, i guess that making this kind of things are easy for me.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [SASS](https://sass-lang.com/) - CSS library
- JavaScript

### What I learned

Mobile Workflow it's a pretty way to work like I said in the last project. I had some problems styling the icon under input so this line made my life:

```css
&-input {
background: no-repeat scroll rem(16) rem(16) url(../images/icon-dollar.svg), var(--lighter-grayish-cyan);
}
```

So now i know that you can just do something like `background: 14px 15px` to move background image over instead of using `center center` or things like that.


I always search for this but I really know what it is, it's like searching "how to center a div" for me:

```JS
let dollarFormat = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

let tipTotal = dollarFormat.format(value);
```

Number format in JS it's really easy so there you have it.

### Useful resources

- [Hide number input's arrows](https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box/4298216#4298216) - This helped styling the inputs without that up/down arrows that are so ugly (and not useful in this case).
- [Put an icon inside an input element](https://stackoverflow.com/questions/917610/put-icon-inside-input-element-in-a-form) - Ok, i was overthinking this but to be honest is really easy to do, but i needed help so this helped me a lot.
- [Outline CSS](https://developer.mozilla.org/es/docs/Web/CSS/outline) - I was wondering if i had to change border's input, but no, it always been outline so this helped me.
- [Currency format](https://stackabuse.com/how-to-format-number-as-currency-string-in-javascript/) - This was helpful doing the calculator logic, sometimes i forget that is so easy to format your numbers.

## Author

- Github - [Cesar SC](https://github.com/Rhiino1)
- Frontend Mentor - [@Rhiino1](https://www.frontendmentor.io/profile/Rhiino1)
- Twitter - [@Rhiino_1](https://www.twitter.com/Rhiino_1)
