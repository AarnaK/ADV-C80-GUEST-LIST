var GuestName = document.getElementById("name1").value;
names_of_people.push(GuestName);

names_of_people.sort();

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    for (j=0; j<names_of_people.length;j++)
    {
        if (s==names_of_people[j])
        {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found" + found + "time/s";
    console.log("name found" + found + "time/s");
}