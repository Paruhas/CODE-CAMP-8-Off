-- CREATE DATABASE codecamp

-- USE codecamp

-- CREATE TABLE provinces (
-- 	id INT AUTO_INCREMENT NOT NULL,
--     name_th VARCHAR(30) NOT NULL,
--     name_en VARCHAR(50) NOT NULL,
--     PRIMARY KEY (id)
-- )provinceprovince

-- CREATE TABLE districts (
-- 	id INT AUTO_INCREMENT NOT NULL,
-- 	province_id INT NOT NULL,
-- 	name_th VARCHAR(50) NOT NULL,
-- 	name_en VARCHAR(50) NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (province_id) REFERENCES provinces (id)
-- )

-- INSERT INTO provinces ( name_th , name_en )
-- VALUES ('ตราด','Trat')

-- INSERT INTO districts ( name_th , name_en , province_id )
-- VALUES ('ลาดพร้าว','Latprao', 3)

-- UPDATE districts
-- SET province_id = 2, name_th = 'พญาไทย', name_en='Payathai'
-- WHERE province_id  = 1

DELETE FROM provinces
WHERE id = 2