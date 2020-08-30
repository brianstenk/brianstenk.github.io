$(
    ()=>{
        $("select").change(function(){
            $.get("/transport", {"type": $(this).val()})
            .done(function(Data){
                var adv = $(Data.advantanges);
                var dis = $(Data.disadvantanges);
                $("#div3").html(utility(adv));
                $("#div4").html(utility(dis));

            })
        })

    });

    function utility(list){
        var str = "<ul>";
        for (let val of list){
            str += "<li>"+val+"</li>";

        }

        str += "</ul>";
        return str;

    }