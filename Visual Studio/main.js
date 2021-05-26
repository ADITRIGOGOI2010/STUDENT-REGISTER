name_of_the_subjects_array = [];
 function submit() {
      var name_1 = document.getElementById("subject1").value;
       var name_2 = document.getElementById("subject2").value;
        var name_3 = document.getElementById("subject3").value;
         var name_4 = document.getElementById("subject4").value;
          name_of_the_subject_array.push(name_1);
           name_of_the_subject_array.push(name_2);
            name_of_the_subject_array.push(name_3);
             name_of_the_subject_array.push(name_4);
              console.log(name_of_the_subject_array);
               document.getElementById("display").innerHTML = name_of_the_subject_array;
                document.getElementById("sbutton").style.display = "none";
                 document.getElementById("shortbutton").style.display = "inline-block";
                 } 
                 function sort() { name_of_the_subject_array.sort();
                     console.log(name_of_the_subject_array);
                      document.getElementById("display").innerHTML = name_of_the_subject_array;