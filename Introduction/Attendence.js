
    function Instagram () {
          alert("인스타그램으로 연결됩니다.")
      }

      function Facebook () {
          alert("페이스북으로 연결됩니다.")
      }


    let info = [
        {
            "name" : "오현석", 
            "birthdate" : {
                "year" : 1998, 
                "month" : "MAY", 
                "day" : 9
            },
            "inCanada" : true
        },
        {
            "name" : "김요셉", 
            "birthdate" : {
                "year" : 1992, 
                "month" : "AUG", 
                "day" : 14
            },
            "inCanada" : true
        },
        {
            "name" : "정수현", 
            "birthdate" : {
                "year" : 1999, 
                "month" : "OCT", 
                "day" : 11
            },
            "inCanada" : true
        },
        {
            "name" : "박호정", 
            "birthdate" : {
                "year" : 2001, 
                "month" : "JAN", 
                "day" : 5
            },
            "inCanada" : true
        }
    ];

    console.log(info)

    const info_list = JSON.stringify(info)

    console.log(info_list);

    localStorage.setItem('info', info_list);

    const info_list_JSON = JSON.parse(info_list);

    console.log(info_list_JSON);

    for (let i = 0; i < info.length; i++) {
        let mem_name = info[i]["name"]
        let mem_date = info[i]["birthdate"]
        // let mem_year = mem_date["year"]
        // if (mem_year <= 1996)
        console.log(mem_name,mem_date)
    }






    