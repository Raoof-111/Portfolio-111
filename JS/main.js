
$(document).ready(function() {
    $(".video").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })



  
$(document).ready(function(){
    $(window).scroll(function(){
        if(
            $(window).scrollTop() > 0 && $(window).scrollTop()<700){
                $('#hm').removeClass("a");
                $('#hm').addClass(" active");
            }
            else if(
                $(window).scrollTop() >700 && $(window).scrollTop()<1000 ){
                   $('#hm').removeClass(" active");
                   $('#hm').addClass(" a");
                   $('#abt').removeClass("a");
                   $('#abt').addClass(" active");
           }
            else if(
                 $(window).scrollTop() >1000 && $(window).scrollTop()<2000 ){
                    $('#abt').removeClass(" active");
                    $('#abt').addClass(" a");
                    $('#skls').removeClass("a");
                    $('#skls').addClass(" active");
            }
            else if(
                $(window).scrollTop() >2000 && $(window).scrollTop()<3000 ){
                   $('#skls').removeClass(" active");
                   $('#skls').addClass(" a");
                   $('#edn').removeClass("a");
                   $('#edn').addClass(" active");
           }
           else if(
            $(window).scrollTop() >3000 && $(window).scrollTop()<7000 ){
               $('#edn').removeClass(" active");
               $('#edn').addClass(" a");
               $('#prtf').removeClass("a");
               $('#prtf').addClass(" active");
       }
       else{
        $('#abt').removeClass(" active");
        $('#abt').addClass(" a");
        $('#skls').removeClass(" active");
        $('#skls').addClass(" a");
        $('#edn').removeClass(" active");
        $('#edn').addClass(" a");
        $('#prtf').removeClass(" active");
        $('#prtf').addClass(" a");
       }
        
    });
});
