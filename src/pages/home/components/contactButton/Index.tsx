interface ContactButtonProps{
  color: string
}

export function ContactButton(props:ContactButtonProps){
  return(
    <a href="https://api.whatsapp.com/send?phone=5583999647875&text=Oi,%20vim%20pelo%20site!" target="_blank" className="text-base rounded-lg text-white py-2 px-5" style={{'backgroundColor':props.color}}>
      Fale com Gleds
    </a>
  )
}