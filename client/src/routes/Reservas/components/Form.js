import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {compose, withState, withHandlers} from 'recompose'

const Form = props => {
  const {handleSubmit, salas, locais, pristine, reset, submitting} = props

  const salasOptions = salas.map(sala => (
    <option key={sala.id} value={sala.nome}>{sala.nome}</option>
  ))

  const locaisOptions = locais.map(local => (
    <option key={local.id} value={local.nome}>{local.nome}</option>
  ))

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field type="hidden" name="_id" component="input" />
      <div className="form-group">
        <label className="col-md-2">Local/Filial</label>
        <div className="col-md-10">
          <Field name="local" component="select" className="form-control">
            <option>--Selecione a Filial--</option>
            {locaisOptions}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Sala</label>
        <div className="col-md-10">
          <Field name="sala" component="select" className="form-control">
            <option>--Selecione a Sala--</option>
            {salasOptions}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Data início</label>
        <div className="col-md-5">
          <Field
            type="text"
            name="data_inicio"
            component="input"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Data fim</label>
        <div className="col-md-5">
          <Field
            type="text"
            name="data_fim"
            component="input"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Responsável</label>
        <div className="col-md-10">
          <Field
            name="responsavel"
            component="input"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2">Café</label>
        <div className="col-md-10">
          <Field
            name="cafe"
            component="input"
            type="checkbox"
            onChange={() => props.cafeClick(props.cafeIsChecked)}
          />
        </div>
      </div>
      {props.cafeIsChecked &&
        <div className="form-group">
          <label className="col-md-2">Qtd pessoas</label>
          <div className="col-md-2">
            <Field
              name="quantidade_pessoas"
              component="input"
              type="text"
              className="form-control"
            />
          </div>
        </div>}
      <div className="form-group">
        <label className="col-md-2">Descrição</label>
        <div className="col-md-10">
          <Field
            name="descricao"
            component="textarea"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}>
            Gravar
          </button>{' '}
          <button
            type="button"
            className="btn btn-default"
            disabled={pristine || submitting}
            onClick={reset}>
            Limpar
          </button>
        </div>
      </div>
    </form>
  )
}

const formReservas = reduxForm({form: 'formReservas'})(Form)

export default compose(
  withState('cafeIsChecked', 'setCafe', false),
  withHandlers({
    cafeClick: ({setCafe}) => cafeIsChecked => setCafe(() => !cafeIsChecked)
  })
)(formReservas)
