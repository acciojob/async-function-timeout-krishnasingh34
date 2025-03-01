//your JS code here. If required.
 let form = document.querySelector('form')
        let textbox = document.querySelector('#text')
        let delaybox = document.querySelector('#delay')
        let output = document.querySelector('#output')
        let btn = document.querySelector('#btn')
        btn.addEventListener('click', async (e)=>{
            e.preventDefault()
            let text = textbox.value
            let delay = parseInt(delaybox.value)
            await new Promise((resolve)=>{
                setTimeout(()=>{
                output.innerText = text
                resolve()
            }, delay)
            })
            
        })