import React, { useEffect, useState } from 'react';

const SampleData = () => {

    const [getsampledata, setGetSampleData] = useState([]);
    console.log(getsampledata);
    
    const getdata = async(e) =>{
      const res = await fetch("http://localhost:5000/sampledata",{
          method:"GET",
          headers:{
              "Content-Type":"application/json"
          }
      });
  
      const data = await res.json();
    //   console.log(data);
  
      if(res.status === 422 || !data){
          // alert("error");
          console.log("error");
      }else{
        setGetSampleData(data)
          // alert("data added");
          console.log("Data Fetched!");
      }
  }

//   const users = getsampledata.


// For 1st Point
const filterone = getsampledata.filter(
    user => 
    // user.income >= "$5 USD" && 
user.car === "Mercedes-Benz" || user.car === "BMW")
console.log(filterone)
  
// For 2nd Point
  const males = getsampledata.filter(user => user.gender === "Male" && Number(user.phone_price) >= 10000);
//   const graterthantenthousand = []

//   males.forEach()

  console.log(males);
  const all_products = getsampledata;

  const getUniqueData = (data, property) =>{
    let newVal = getsampledata.map((curElem) =>{
        return curElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    console.log(newVal);
  };

  const categoryOnlyData = getUniqueData(all_products, "gender");



  const [dataname, setDataName] = useState({
    data:""
  });
  let name, value;
  const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setDataName({...dataname,[name]:value});
}
  
  
  useEffect(()=>{
    getdata();
  },[])

  return (
    <>
    <div className="flex flex-col">
        <div className="m-12">
        <div class="grid grid-cols-3 gap-4">
            <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select name='data' onChange={handleInputs} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="10000">Male Users which have phone price greater than 10,000</option>
                {/* <option value="CA">Canada</option> */}
                {/* <option value="FR">France</option> */}
                {/* <option value="DE">Germany</option> */}
            </select>
            </div>
            <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>
            <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>
        </div>
        </div>
        <div className=' m-12 grid grid-cols-3 gap-4'>
            <div className="category border p-3 "> <button className='w-full block' type='button' name='all' value={"all"} href="/">ALL</button> </div>
            <div className="category border p-3 "> <button className='w-full block' type='button' name='male' value={"male"} href="/">Male</button> </div>
            <div className="category border p-3 "> <button className='w-full block' type='button' name='female' value={"female"} href="/">Female</button> </div>
        </div>
        <div className="m-12 ">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                    <tr>
                    {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th> */}
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Income</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">City</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Car</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quote</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Price</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        getsampledata.map((element, id)=>{
                            return(
                                <tr key={id} className="hover:bg-gray-100 dark:hover:bg-gray-700 break-words">
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{element.first_name} {element.last_name}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.last_name}</td> */}
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.email}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.gender}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.income}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.city}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.car}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.quote}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{element.phone_price}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                    {/* <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                        </td>
                    </tr>

                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                    </td>
                    </tr>

                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                    </td>
                    </tr>

                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Edward King</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">16</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">LA No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                    </td>
                    </tr>

                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Red</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Melbourne No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-blue-500 hover:text-blue-700" href="/">Delete</a>
                    </td>
                    </tr> */}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default SampleData