/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'typeId', {
    type: Sequelize.INTEGER(),
    allowNull: true
  });
  await queryInterface.addColumn('users', 'identification', {
    type: Sequelize.STRING(20),
    allowNull: true
  });
  await queryInterface.addColumn('users', 'address', {
    type: Sequelize.STRING(255),
    allowNull: true
  });
  await queryInterface.addColumn('users', 'phone', {
    type: Sequelize.STRING(10),
    allowNull: true
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'typeId', {
    type: Sequelize.TEXT,
    allowNull: true
  });

  await queryInterface.removeColumn('users', 'identification', {
    type: Sequelize.TEXT,
    allowNull: true
  });

  await queryInterface.removeColumn('users', 'address', {
    type: Sequelize.TEXT,
    allowNull: true
  });

  await queryInterface.removeColumn('users', 'phone', {
    type: Sequelize.TEXT,
    allowNull: true
  });
}

