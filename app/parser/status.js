import forEach from 'lodash/forEach';

const statusRegex = /^([AMRDC]|\?\?)\s+([\w\d\/\.\-_]+)/;
const statusKeys = {
  'M': 'modified',
  'A': 'added',
  'D': 'deleted',
  'R': 'renamed',
  'C': 'copied',
  '??': 'untracked'
};

export default (output) => {
  if (typeof output !== 'string') return;

  var statuses = [];

  forEach(output.split('\n'), (status) => {
    if (status === '') return;

    const statusParts = statusRegex.exec(status.trim());
    statuses.push({
      filename: statusParts[2],
      state: statusKeys[statusParts[1]]
    });
  });

  return statuses;
};
