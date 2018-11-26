import moment from 'moment';
import pubsub from '../graphql/subscription';

const texts = {
  1: {
    1: () => 'Novo Prospect cadastrado | Fase 1.',
    2: (userName) => `O prospect ${userName} aceitou o termo de adesão.`,
  },
  2: {
    1: (userName) => `Prospect ${userName} está solicitando uma indicação de Sócio. Faça o Primeiro Contato.`,
    2: (userName, partnerName) => `O Prospect ${userName} selecionou o sócio ${partnerName} para gerir sua conta.`
  },
  3: {
    1: (userName) => `O Prospect ${userName} concluiu o registro de fotos de sua Documentação.`,
    2: (userName) => `O Prospect ${userName} concluiu o preenchimento dos dados.`,
    3: (userName) => `O Prospect ${userName} definiu seu perfil Suitability.`,
  }
};

const createLog = async (models, steps, ids, transaction = null) => {
  const { userId, partnerId, user: newUser } = ids;
  const { step, substep } = steps;
  let user = await models.User.findById(userId);
  let partner = null;
  if(partnerId) partner = await models.User.findOne({ where: { asPartnerId: partnerId } });

  let userName = (user && user.name) || (newUser && newUser.name) || '';
  let partnerName = (partner && partner.name) || '';
  let timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  let text = texts[step][substep](userName, partnerName);
  let create = { step, text, timestamp, userId };
  let transactionOptions = transaction ? { transaction } : { } ;
  const history = await models.UserHistory.create(create, transactionOptions);
  if(history) {
    const historyWithUser = {
      id: history.id, text: history.text, step: history.step, seen: history.seen,
      user: user || newUser || null,
      timestamp: moment(history.timestamp).format(),
    }
    pubsub.publish('logCreated', { logCreated: historyWithUser });
  }
  return history;

}

export default createLog;