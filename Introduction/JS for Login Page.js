
    function Instagram () {
          alert("인스타그램으로 연결됩니다.")
      }

      function Facebook () {
          alert("페이스북으로 연결됩니다.")
      }


    let information = [
        {"name" : '오현석', 'year' : '1998', 'month' : '05', 'day' : '09'},
        {"name" : '김요셉', 'year' : '1992', 'month' : '08', 'day' : '14'},
        {"name" : '정수현', 'year' : '1999', 'month' : '10', 'day' : '11'},
        {"name" : '박호정', 'year' : '2001', 'month' : '01', 'day' : '05'}
    ]


    let birthdate = ["year" + "month" + "day"];


    for (let i = 0 ; i <information.length ; i++) {
        console.log(information[i]);
    }

