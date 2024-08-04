const registrationNumberMask = value => {
  	return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{4})(\d)/, '$1.$2')
  }
  

 export default registrationNumberMask