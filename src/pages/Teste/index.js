function Teste() {
  return (
    <>
      <form action="/process_payment" method="post" id="paymentForm">
        <h3>Detalhe do comprador</h3>
        <div>
          <div>
            <label for="email">E-mail</label>
            <input id="email" name="email" type="text" value="test@test.com" />
          </div>
          <div>
            <label for="docType">Tipo de documento</label>
            <select
              id="docType"
              name="docType"
              data-checkout="docType"
              type="text"
            ></select>
          </div>
          <div>
            <label for="docNumber">Número do documento</label>
            <input
              id="docNumber"
              name="docNumber"
              data-checkout="docNumber"
              type="text"
            />
          </div>
        </div>
        <h3>Detalhes do cartão</h3>
        <div>
          <div>
            <label htmlFor="cardholderName">Titular do cartão</label>
            <input
              id="cardholderName"
              data-checkout="cardholderName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Data de vencimento</label>
            <div>
              <input
                type="text"
                placeholder="MM"
                id="cardExpirationMonth"
                data-checkout="cardExpirationMonth"
                onselectstart="return false"
                onpaste="return false"
                oncopy="return false"
                oncut="return false"
                ondrag="return false"
                ondrop="return false"
              />
              <span class="date-separator">/</span>
              <input
                type="text"
                placeholder="YY"
                id="cardExpirationYear"
                data-checkout="cardExpirationYear"
                onselectstart="return false"
                onpaste="return false"
                oncopy="return false"
                oncut="return false"
                ondrag="return false"
                ondrop="return false"
              />
            </div>
          </div>
          <div>
            <label for="cardNumber">Número do cartão</label>
            <input
              type="text"
              id="cardNumber"
              data-checkout="cardNumber"
              onselectstart="return false"
              onpaste="return false"
              oncopy="return false"
              oncut="return false"
              ondrag="return false"
              ondrop="return false"
            />
          </div>
          <div>
            <label for="securityCode">Código de segurança</label>
            <input
              id="securityCode"
              data-checkout="securityCode"
              type="text"
              onselectstart="return false"
              onpaste="return false"
              oncopy="return false"
              oncut="return false"
              ondrag="return false"
              ondrop="return false"
            />
          </div>
          <div id="issuerInput">
            <label for="issuer">Banco emissor</label>
            <select id="issuer" name="issuer" data-checkout="issuer"></select>
          </div>
          <div>
            <label for="installments">Parcelas</label>
            <select type="text" id="installments" name="installments"></select>
          </div>
          <div>
            <input
              type="hidden"
              name="transactionAmount"
              id="transactionAmount"
              value="100"
            />
            <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
            <input type="hidden" name="description" id="description" />

            <button type="submit">Pagar</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Teste;
