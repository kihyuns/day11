const storeService = (function(){

    const urlArr = ['http://172.30.1.15:5555/WebstormProjects/w22/1team.json','http://172.30.1.15:5555/WebstormProjects/w22/2team.json','http://172.30.1.15:5555/WebstormProjects/w22/3team.json']

    let storeArr = []

    function loadJson(index, callback){

        $.getJSON(urlArr[index], function(data){
            storeArr = data
            callback(data)
        })

    }

    function getStore(sno){
        return storeArr.filter(s => s.sno === sno)[0]
    }

    return {loadJson, getStore}

})()