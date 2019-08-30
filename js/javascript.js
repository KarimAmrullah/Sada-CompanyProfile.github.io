
const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider,{
            indicators: false,
            height: 350,
            transition: 600,
            interval: 3000
        });
const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);

const materialbox =document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialbox);

const scroll =document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scroll,{
            scrollOffset: 65
        });

