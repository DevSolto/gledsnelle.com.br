interface ContactButtonProps{
  color: string
}

export function ContactButton(props:ContactButtonProps){
  return(
    <button className="text-base rounded-lg text-white py-2 px-5" style={{'backgroundColor':props.color}}>
      Fale com Gleds
    </button>
  )
}