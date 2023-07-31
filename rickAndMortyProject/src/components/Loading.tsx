import { Dna } from 'react-loader-spinner'

const Loading = () => {
  return(
    <div id='loginLoad'>
        <h1>Carregando...</h1>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
  )
}

export default Loading;