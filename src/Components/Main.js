import React, {useState } from 'react'
import './CSS/Header.css'





const Main=()=>{
    const [control, setcontrol]=useState(false)
    const [array, setarray]=useState([])
    const [algorithm, setalgorithm]=useState("Bubble")
    const [transition, settransition]=useState(5)
    const [size, setsize]=useState(50)
    const [Name, setName]=useState("Bubble Sort")
    const [Complex, setComplex]=useState("O(N2)")

    // useEffect(()=>{
    //     Createarray()
    // },[])

    const Createarray=()=>{
        if(array.length!==0){
            for(let i=0; i<array.length; i++){
                let bar=document.getElementById(i).style;
                bar.backgroundColor='mediumaquamarine'
            }
        }
        let newar=[]
        for(let i=0; i<size; i++){
            newar.push(Math.floor(Math.random()*(500-100+1)+100))
        }
        setarray(newar)    
    }

    const Sortar=()=>{
        setcontrol(true)
        switch(algorithm){
            case "Bubble":
                Bubble_sort();
                break
            case "Selection":
                Selection_sort();
                break
            case "Merge":
                Merge_sort();
                break;
            default:
                Insertion_sort();
                break;
        }
    }

    const Bubble_sort= async ()=>{
        setName("Bubble Sort")
        setComplex("O(N2)")
        let currarray=array;
        setcontrol(true);
        for(let i=size-1; i>=0; i--){
            for(let j=0; j<i; j++){
                let bar1=document.getElementById(j).style;
                let bar2=document.getElementById(j+1).style;
                
                await new Promise(resolve => setTimeout(resolve, transition));

                bar1.backgroundColor='yellow';
                bar2.backgroundColor='yellow';
                await new Promise(resolve => setTimeout(resolve, transition));
                if(currarray[j]>currarray[j+1]){
                    let temp=currarray[j];
                    currarray[j]=currarray[j+1];
                    currarray[j+1]=temp;
                    setarray([...array, currarray]);
                    await new Promise(resolve => setTimeout(resolve, transition));
                    bar1.backgroundColor='green';
                    bar2.backgroundColor='green';
                    await new Promise(resolve => setTimeout(resolve, transition));
                }
                bar1.backgroundColor='mediumaquamarine'
                bar2.backgroundColor='mediumaquamarine'
            }
        }
        for(let i=0; i<size; i++){
            let bar1=document.getElementById(i).style;
            bar1.backgroundColor='green';
        }
        setcontrol(false);
    }

    const Merge_sort = async () => {
        let currentArr = array
        setName("Merge Sort")
        setComplex("O(n*log(n))")
    
        await sort(currentArr, 0, array.length - 1)
        for(let i=0; i<size; i++){
            let bar1=document.getElementById(i).style;
            bar1.backgroundColor='green';
            await new Promise(resolve => setTimeout(resolve, transition));
        }
        setcontrol(false);
      }
    
      const sort = async (arr, low, high) => {
        if (low < high) {
          let mid = Math.floor((low + high) / 2)
          await sort(arr, low, mid)
          await sort(arr, mid + 1, high)
          await merge(arr, low, mid, high)
        }
      }
    
      const merge = async (arr, low, mid, high) => {
        let i=low
        let j=mid + 1
        let k=0
        let tempArr=[]
    
        while (i<=mid && j<=high) {
          if (arr[i]<arr[j]) {
            tempArr[k]=arr[i]
            i++
            k++
          } 
          else {
            tempArr[k]=arr[j]
            j++
            k++
          }
          setarray([...array, tempArr])
    
          let bar1 = document.getElementById(i).style
          let bar2 = document.getElementById(j).style
          await new Promise(resolve => setTimeout(resolve, transition));
          bar1.backgroundColor = 'yellow'
          bar2.backgroundColor = 'yellow'
    
          await new Promise(resolve => setTimeout(resolve, transition));
          bar1.backgroundColor = 'mediumaquamarine'
          bar2.backgroundColor = 'mediumaquamarine'
          await new Promise(resolve => setTimeout(resolve, transition));
          
        }
    
        while (i <= mid) {
          tempArr[k] = arr[i]
    
          setarray([...array, tempArr])
    
          let bar1 = document.getElementById(i).style
          let bar2 = document.getElementById(j).style
          await new Promise(resolve => setTimeout(resolve, transition));
          bar1.backgroundColor = 'yellow'
          bar2.backgroundColor = 'yellow'
          await new Promise(resolve => setTimeout(resolve, transition));
          
    
          bar1.backgroundColor = 'mediumaquamarine'
          bar2.backgroundColor = 'mediumaquamarine'
          await new Promise(resolve => setTimeout(resolve, transition));
    
          i++
          k++
        }
    
        while (j <= high) {
          tempArr[k] = arr[j]
    
          setarray([...array, tempArr])
          await new Promise(resolve => setTimeout(resolve, transition));
          let bar1 = document.getElementById(i).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = 'yellow'
          bar2.backgroundColor = 'yellow'
    
          await new Promise(resolve => setTimeout(resolve, transition));
    
          bar1.backgroundColor = 'mediumaquamarine'
          bar2.backgroundColor = 'mediumaquamarine'
          await new Promise(resolve => setTimeout(resolve, transition));
    
          j++
          k++
        }
    
        for (let i = low; i <= high; i++) {
          arr[i] = tempArr[i - low]
          setarray([...array, arr])
        }
      }
      
    const Selection_sort= async ()=>{
        setName("Selection Sort")
        setComplex("O(N2)")
        let currarray=array;
        setcontrol(true);
        for(let i=0; i<size; i++){
            for(let j=i+1; j<size; j++){
                let bar1=document.getElementById(i).style;
                let bar2=document.getElementById(j).style;
                
                await new Promise(resolve => setTimeout(resolve, transition));

                bar1.backgroundColor='yellow';
                bar2.backgroundColor='yellow';
                await new Promise(resolve => setTimeout(resolve, transition));
                if(currarray[i]>currarray[j]){
                    let temp=currarray[i];
                    currarray[i]=currarray[j];
                    currarray[j]=temp;
                    setarray([...array, currarray]);
                    await new Promise(resolve => setTimeout(resolve, transition));
                    bar1.backgroundColor='green';
                    bar2.backgroundColor='green';
                    await new Promise(resolve => setTimeout(resolve, transition));
                }
                bar1.backgroundColor='mediumaquamarine'
                bar2.backgroundColor='mediumaquamarine'
            }
        }
        for(let i=0; i<size; i++){
            let bar1=document.getElementById(i).style;
            bar1.backgroundColor='green';
        }
        setcontrol(false);
    }

    const Insertion_sort= async()=>{
        setName("Insertion Sort")
        setComplex("O(N2)")
        let currarray=array;
        setcontrol(true);
        for (let i = 1; i < currarray.length; i++) {
            let current = currarray[i]
            let j = i - 1
            while (j >= 0 && currarray[j] > current) {
              currarray[j + 1] = currarray[j]
              setarray([...array, currarray])
              await new Promise(resolve => setTimeout(resolve, transition));
              let bar1 = document.getElementById(j + 1).style
              let bar2 = document.getElementById(j).style
              bar1.backgroundColor = 'yellow'
              bar2.backgroundColor = 'yellow'
    
              await new Promise(resolve => setTimeout(resolve, transition));
    
              bar1.backgroundColor = 'mediumaquamarine'
              bar2.backgroundColor = 'mediumaquamarine'
    
              j--
            }
            currarray[j + 1] = current
            setarray([...array, currarray])
          }
        for(let i=0; i<size; i++){
            let bar1=document.getElementById(i).style;
            bar1.backgroundColor='green';
            
        }
        setcontrol(false);
    }
     

    return (
    <>
    <div className='header'>
            <button className='Newarray'  onClick={Createarray} disabled={control}>New Array</button>
            <select className='Algo' onChange={e=>setalgorithm(e.target.value)}>
                <option value="Bubble">Bubble Sort</option>
                <option value="Merge">Merge Sort</option>
                <option value="Selection">Selection Sort</option>
                <option value="Insertion">Insertion Sort</option>
            </select>
            
            <span>
                <span className='nametr'>
                    Speed : {transition}
                </span>
                <span>
                <input type='range' min='0' max='100' value={transition} className='Slider' onChange={e=>settransition(e.target.value)}/>
                </span>
            </span>
            
            <span>
                <span className='nametr'>
                    Array Size : {size}
                </span>
                <span>
                <input type='range' min='10' max='100' value={size} className='Slider' onChange={e=>setsize(e.target.value)}/>
                </span>
            </span>

            <button className='Sort' onClick={Sortar}disabled={control}> Sort</button>
    
    </div>
    <div className='Text'>
        Algorithm Name : {Name}
        <br/>
        Time Complexity : {Complex}
    </div>
    <div className='Bars'> 
        {array && array.map((val, key)=>{
                return(
                    <div className='Candle' id={key} key={key} style={{height:val}}>
                    </div>
                )
            }
        )} 
    </div>

    
    </>
    )
}

export default Main