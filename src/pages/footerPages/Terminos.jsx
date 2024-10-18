import DefaultLayout from "../../layouts/DefaultLayout";


const Terminos = () => {
  return (
    
<DefaultLayout>


    
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Términos de servicio</h1>
      
      {/* Sección de Recomendaciones sobre las Joyas */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SLEEVE JOYERÍA</h2>
        <h3 className="text-xl font-medium mb-2">Recomendaciones a tener en cuenta con las joyas</h3>
        
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Apreciar el estiramiento de las JOYAS SLEEVE no se considera defecto de fabricación. No exponga sus productos a químicos o ambientes ásperos, ya que pueden alterar la apariencia del producto. Esto incluye, entre otros, pulidor de plata líquido, piscinas, jacuzzis y spas. Por favor, consulte las instrucciones de cuidado y limpieza para obtener información adicional sobre el cuidado y la protección de su producto. No cumplir con estas instrucciones puede constituir un abuso, mal uso o uso indebido de su producto.
          </li>
          <li>
            Debes tener en cuenta con los tejidos que son delgados o delicados que requieren de un cuidado especial.
          </li>
          <li>
            Te recomendamos que no la hales y que en el momento de ponértela o quitártela lo hagas con delicadeza ya que la garantía no cubre daños o rótulas de esta.
          </li>
        </ol>
      </section>

      {/* Sección de Pagos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">SLEEVE BOUTIQUE</h2>
        <h3 className="text-xl font-medium mb-2">Pagos</h3>
        
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Pagos realizados con tarjetas de crédito deben ser previamente verificados. Eventualmente se le solicitará al comprador enviar foto de identidad del documento del titular de la tarjeta, como otros datos, para hacer dicha verificación y de esta manera evitar fraudes. De igual forma se podrá proceder con los demás medios de pago como: Addi, Bolm, Mercado Pago, y cualquier otro que se implemente en un futuro.
          </li>
        </ol>
      </section>
    </div>
    </DefaultLayout>
  );
};

export default Terminos;
