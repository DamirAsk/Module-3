let opRunBt = {
  field: document.getElementById(`module-running-button`),
  events: {
    mouseover: e => {
      if (e.target.id === `Forest_Gamp`) {
        let i, newI;
        newI = i = [...opRunBt.field.children].indexOf(e.target.parentElement);
        while(i === newI)
          newI = Math.floor(Math.random() * opRunBt.field.children.length);
        opRunBt.field.children[newI].appendChild(e.target);
        newI = i = null;
      }
    },
  },
};

opRunBt.field.addEventListener(`mouseover`, opRunBt.events.mouseover);