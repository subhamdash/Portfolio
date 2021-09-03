console.log("It's working")
let themeDots = document.getElementsByClassName('wrapper-dot')
for(var i=0;i<themeDots.length;++i)
{
    themeDots[i].addEventListener('click',function(){
        let mode=this.dataset.mode
        console.log("Option Clicked",mode)
        setTheme(mode)

    })

}
function setTheme(mode)
{
    if(mode=="light")
    {
        document.getElementById('theme-style').href='index.css'

    }

    if(mode=="blue")
    {
        document.getElementById('theme-style').href='blue.css'

    }

    if(mode=="green")
    {
        document.getElementById('theme-style').href='green.css'
    }
    if(mode=="black")
    {
        document.getElementById('theme-style').href='black.css'
    }
}