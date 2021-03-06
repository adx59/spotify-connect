const { SpotifyPlayer } = require('@sc/rest');
const { LinkedCommand } = require('@sc/models');

module.exports = class PreviousCommand extends LinkedCommand {
  constructor (main) {
    super(main, {
      description: 'Plays the previous song.',
      triggers: [ 'previous', 'prev' ],
      order: 5
    });
  }

  async execute (link) {
    await SpotifyPlayer.prev(link);
    return 'Playing previous track...';
  }
};
