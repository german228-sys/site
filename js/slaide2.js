(function(){


        var imgLen = document.getElementById('footer1');
        var images = imgLen.getElementsByTagName('img');
        var counter = 0;

        if(counter <= images.length){

            setInterval(function(){
                images[0].src = images[counter].src;
                console.log(images[counter].src);
                counter++;

                

            },1000)  ;


}
})();
