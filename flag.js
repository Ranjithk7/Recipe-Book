import axios from "axios";


let code = [];
const fetchdata = async () => {
    await axios.get("https://flagcdn.com/en/codes.json")
        .then(async res => {
            const flag = res.data;
            const cols =Object.keys(res?.data);              
            await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")  
            .then(res => {
                const data = res.data?.meals;
                // console.log(data);
            
                for (let i in data) {
                    // console.log(data[i].strArea);

                    for (let j in cols) {              
                        const k = cols[j];

                        if (data[i].strArea.toLowerCase()
                            .includes( flag[k]
                                .split(" ")[0]
                                // .substring(0, flag[k].split(" ")[0].length / 2)
                                .toLowerCase())) {


                            // code.push(k);
                            console.log(flag[k]
                                .split(" ")[0]
                                // .substring(0, flag[k].split(" ")[0].length / 2)
                                .toLowerCase());
                            
                        }

                        
                    }
                }

                console.log(code);
                
            })

        })
}

fetchdata();
