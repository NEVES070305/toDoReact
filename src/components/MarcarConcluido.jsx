import React from 'react';
// import AiOutlineCheckCircle from 'AiOutlineCheckCircle';

const MarcarConcluido = ({ concluido, onMarcarConcluido }) => {
    const imagemBase64Feito = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nN2VXU4CUQyFv0DgRXyUuAZkD+oGDBrDFgzEAG6CELehsB8Z4w/qJtQHeWFMzblJA8zcGR85yU0Y2p52zm07sOuoA11gBrwA3zr2eyqb+fwLF8AHkEbOO3BehrgC3DqCB2AAtIA9nSNgCMyd30SxUQTyH+AqEmS2nnxDkqgsgfy4xFufuCSdLKe609wqL4u+Yt+A2jaHrtO8kJZAUxIZqkAijsttzjMZByXIE8VY9YaRnu+3BbzK2CpJnugZdVeqOdnAl4yNCPmBa89n4NDZ9vW/cW3gU0ZzCui56vIqX09gXFGJ+mtEMXJDO0+iqYzDjGqTCLnhRj53eW06d23adMQxcmvTx7w2rWtxpa63fZI8csO1YhdZg4a2YlgVNv4B4Q6ycAosgRVwRgQTl6SvV89CVZUvFTOmACouSSppRhqihk5bFxo0X4m86Ir5Q0eLK/bBWRSRJQs1dYTtFptam1A7T2pFs2Ve6G7gFyJGi9hnGFl8AAAAAElFTkSuQmCC";

  return (
    <div onClick={onMarcarConcluido}>
    {concluido ? (
        <div className="circle">
        {/* <AiOutlineCheckCircle className="checkmark" /> */}
        </div>
    ) : <div className="circle"></div>}
    </div>    
  );
};

export default MarcarConcluido;
