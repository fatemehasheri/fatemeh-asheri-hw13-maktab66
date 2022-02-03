function handledelete() {
    $(document).ready(function() {
        $("#delete-btn").click(function() {
                var p =$(this).parent().parent().remove()
        })
    })
}

function handleclone() {
    $(document).ready(function() {
        $("#clone-btn").click(function() {
            var p =$(this).parent().parent().clone()
            var tr=$(this).closest("tr").after(p)
        })
    })
    
}


$(document).ready(function() {
    $("#add-btn").click(function() { 
        let tr2 =$(".tr").html();
        let createTr = document.createElement('tr')
        let addtd=$(createTr).addClass("tr").prepend(tr2)
        $(".t-body").prepend(addtd);
        handledelete()
        handleclone()
    })
    handledelete()
    handleclone()
})
