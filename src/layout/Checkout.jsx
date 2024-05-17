


const Checkout = () => {



  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout