/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'firstname', {
    type: Sequelize.STRING(255),
    allowNull: false
  })

  await queryInterface.addColumn('users', 'lastname', {
    type: Sequelize.STRING(255),
    allowNull: false
  })
}
