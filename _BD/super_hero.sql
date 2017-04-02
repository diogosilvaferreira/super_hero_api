-- -----------------------------------------------------
-- Schema super_hero
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `super_hero` ;

-- -----------------------------------------------------
-- Schema super_hero
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `super_hero` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `super_hero` ;

-- -----------------------------------------------------
-- Table `super_hero`.`AuditEvent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `super_hero`.`AuditEvent` ;

CREATE TABLE IF NOT EXISTS `super_hero`.`AuditEvent` (
  `uuid` CHAR(36) NOT NULL COMMENT '',
  `entity` VARCHAR(255) NULL COMMENT '',
  `datetime` DATETIME NULL COMMENT '',
  `username` VARCHAR(100) NULL COMMENT '',
  `action` VARCHAR(255) NULL COMMENT '',
  PRIMARY KEY (`uuid`)  COMMENT '')
ENGINE = InnoDB;

CREATE UNIQUE INDEX `entityId_UNIQUE` ON `super_hero`.`AuditEvent` (`uuid` ASC)  COMMENT '';

-- -----------------------------------------------------
-- Table `super_hero`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `super_hero`.`Users` ;

CREATE TABLE IF NOT EXISTS `super_hero`.`Users` (
  `uuid` CHAR(36) NOT NULL COMMENT '',
  `username` VARCHAR(45) NOT NULL COMMENT '',
  `password` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`uuid`)  COMMENT '')
ENGINE = InnoDB;

CREATE UNIQUE INDEX `uuid_UNIQUE` ON `super_hero`.`Users` (`uuid` ASC)  COMMENT '';

-- -----------------------------------------------------
-- Table `super_hero`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `super_hero`.`Role` ;

CREATE TABLE IF NOT EXISTS `super_hero`.`Role` (
  `idRole` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `name` VARCHAR(100) NOT NULL COMMENT '',
  `User_uuid` CHAR(36) NOT NULL COMMENT '',
  PRIMARY KEY (`idRole`)  COMMENT '',
  CONSTRAINT `fk_Role_User1`
    FOREIGN KEY (`User_uuid`)
    REFERENCES `super_hero`.`Users` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idRole_UNIQUE` ON `super_hero`.`Role` (`idRole` ASC)  COMMENT '';
CREATE INDEX `fk_Role_User1_idx` ON `super_hero`.`Role` (`User_uuid` ASC)  COMMENT '';

-- -----------------------------------------------------
-- Table `super_hero`.`SuperHero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `super_hero`.`SuperHero` ;

CREATE TABLE IF NOT EXISTS `super_hero`.`SuperHero` (
  `uuid` CHAR(36) NOT NULL COMMENT '',
  `name` VARCHAR(45) NOT NULL COMMENT '',
  `alias` VARCHAR(45) NOT NULL COMMENT '',
  `area` VARCHAR(45) NOT NULL COMMENT '',
  `location` GEOMETRY NULL COMMENT '',
  PRIMARY KEY (`uuid`)  COMMENT '')
ENGINE = InnoDB;

CREATE UNIQUE INDEX `uuid_UNIQUE` ON `super_hero`.`SuperHero` (`uuid` ASC)  COMMENT '';

-- -----------------------------------------------------
-- Table `super_hero`.`SuperPower`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `super_hero`.`SuperPower` ;

CREATE TABLE IF NOT EXISTS `super_hero`.`SuperPower` (
  `uuid` CHAR(36) NOT NULL COMMENT '',
  `name` VARCHAR(45) NOT NULL COMMENT '',
  `description` VARCHAR(255) NULL COMMENT '',
  `SuperHero_uuid` CHAR(36) NOT NULL COMMENT '',
  PRIMARY KEY (`uuid`)  COMMENT '',
  CONSTRAINT `fk_SuperPower_SuperHero1`
    FOREIGN KEY (`SuperHero_uuid`)
    REFERENCES `super_hero`.`SuperHero` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `uuid_UNIQUE` ON `super_hero`.`SuperPower` (`uuid` ASC)  COMMENT '';
CREATE INDEX `fk_SuperPower_SuperHero1_idx` ON `super_hero`.`SuperPower` (`SuperHero_uuid` ASC)  COMMENT '';

