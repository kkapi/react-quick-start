export default function MyButton() {

    function HandleClick() {
        alert('Click!')
      }

    return (
        <button onClick={HandleClick}>I'm a button</button>
    )
}