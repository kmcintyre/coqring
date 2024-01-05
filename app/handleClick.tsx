'use client';

const handleClick = async () =>  {
    console.log('call deploy')
    const response = await fetch('/api', {
        method: 'POST',
    })
    const data = await response.json()
}

const HandleClick = () => (
    <div>
        <button onClick={handleClick}>Handle Click</button>
    </div>
)

export default HandleClick;