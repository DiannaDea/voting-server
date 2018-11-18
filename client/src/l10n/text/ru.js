export default {
  createVoting: {
    steps: ['Общая информация о голосовании', 'Укажите коеффициенты', 'Добавьте кандидатов'],
    forms: {
      topicForm: {
        topic: 'Тема',
        votingStart: 'Дата начала',
        votingEnd: 'Дата конца',
        votersPercent: 'Процент проголосовавших',
      },
      weightForm: {
        name: 'Название',
        cost: 'Величина',
        question: 'Вопрос',
      },
      candidatesForm: {
        name: 'ФИО',
        description: 'Описание',
      },
    },
    buttons: {
      back: 'Назад',
      next: 'Вперед',
      finish: 'Завершить',
      addWeight: 'Добавить коеффициент',
      addCandidate: 'Добавить кандидата',
    },
    finishText: 'Создание голосования успешно завершено!',
  },
  header: {
    createVoting: 'Создать голосование',
    activityTitle: 'Активность',
    accountTitle: 'Профиль',
    logoutTitle: 'Выйти из аккаунта',
  },
  navSideBar: {
    new: 'Новые голосования',
    recent: 'Недавние голосования',
    all: 'Все голосования',
    groupMembers: 'Участники группы',
  },
  groupSideBar: {
    createGroup: 'Создать группу',
  },
  votingItem: {
    topic: 'Тема',
    votingStart: 'Дата начала',
    votingEnd: 'Дата конца',
    votersPercent: 'Процент проголосовавших',
    buttons: {
      vote: 'Голосовать',
      closeModal: 'Закрыть',
    },
    vote: {
      candidateText: 'Выберите лучшего кандидата из списка ниже',
      weightText: 'Ответьте на вопросы чтобы подсчитать величину вашего голоса',
      voteTitle: 'Ваш голос важен для нас!',
      enterAnswer: 'Введите ответ',
    },
  },
  signIn: {
    title: 'Вход в систему',
    createGroup: {
      title: 'Хотите ',
      link: 'создать группу?',
    },
    email: 'Электронная почта',
    password: 'Пароль',
    buttonSignIn: 'Войти',
  },
  createGroup: {
    title: 'Создать группу',
    signIn: {
      title: 'Уже есть аккаунт?',
      link: 'Войти!',
    },
    group: 'Название группы',
    adminEmail: 'Эл почта админа',
    memberEmail: 'Эл почта участника',
    buttons: {
      addMember: 'Добавить',
      createGroup: 'Создать группу',
    },
  },
};
