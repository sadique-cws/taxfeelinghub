SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------
-- Table structure for migrations
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `migration` VARCHAR(255) NOT NULL,
  `batch` INT NOT NULL
);

-- ---------------------------------------------------------
-- Table structure for users
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `email_verified_at` DATETIME DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) DEFAULT NULL,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  `two_factor_secret` TEXT DEFAULT NULL,
  `two_factor_recovery_codes` TEXT DEFAULT NULL,
  `two_factor_confirmed_at` DATETIME DEFAULT NULL,
  `role` VARCHAR(255) NOT NULL DEFAULT 'user',
  `status` VARCHAR(255) NOT NULL DEFAULT 'pending',
  `phone` VARCHAR(255) DEFAULT NULL,
  `google_id` VARCHAR(255) DEFAULT NULL
);

-- ---------------------------------------------------------
-- Table structure for documents
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `documents`;
CREATE TABLE `documents` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `file_path` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) DEFAULT NULL,
  `size` INT NOT NULL,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  CONSTRAINT `documents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- Table structure for career_jobs
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `career_jobs`;
CREATE TABLE `career_jobs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT '1',
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL
);

-- ---------------------------------------------------------
-- Table structure for leads
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `leads`;
CREATE TABLE `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `is_read` TINYINT(1) NOT NULL DEFAULT '0',
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL
);

-- ---------------------------------------------------------
-- Table structure for posts
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `excerpt` VARCHAR(255) DEFAULT NULL,
  `featured_image` VARCHAR(255) DEFAULT NULL,
  `status` VARCHAR(255) NOT NULL DEFAULT 'draft',
  `author_id` INT NOT NULL,
  `published_at` DATETIME DEFAULT NULL,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  CONSTRAINT `posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- Table structure for testimonials
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `testimonials`;
CREATE TABLE `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_name` VARCHAR(255) NOT NULL,
  `business_name` VARCHAR(255) DEFAULT NULL,
  `content` TEXT NOT NULL,
  `rating` INT NOT NULL DEFAULT '5',
  `avatar` VARCHAR(255) DEFAULT NULL,
  `is_featured` TINYINT(1) NOT NULL DEFAULT '0',
  `status` VARCHAR(255) NOT NULL DEFAULT 'published',
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL
);

-- ---------------------------------------------------------
-- Table structure for tickets
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `status` VARCHAR(255) NOT NULL DEFAULT 'open',
  `priority` VARCHAR(255) NOT NULL DEFAULT 'medium',
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  CONSTRAINT `tickets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- Table structure for ticket_replies
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `ticket_replies`;
CREATE TABLE `ticket_replies` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ticket_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  CONSTRAINT `ticket_replies_ticket_id_foreign` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ticket_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- Table structure for sessions
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` VARCHAR(255) PRIMARY KEY,
  `user_id` BIGINT UNSIGNED DEFAULT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT DEFAULT NULL,
  `payload` LONGTEXT NOT NULL,
  `last_activity` INT NOT NULL
);

-- ---------------------------------------------------------
-- Table structure for cache
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `cache`;
CREATE TABLE `cache` (
  `key` VARCHAR(255) PRIMARY KEY,
  `value` MEDIUMTEXT NOT NULL,
  `expiration` INT NOT NULL
);

-- ---------------------------------------------------------
-- Table structure for cache_locks
-- ---------------------------------------------------------
DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE `cache_locks` (
  `key` VARCHAR(255) PRIMARY KEY,
  `owner` VARCHAR(255) NOT NULL,
  `expiration` INT NOT NULL
);

INSERT INTO migrations VALUES(1,'0001_01_01_000000_create_users_table',1);
INSERT INTO migrations VALUES(2,'0001_01_01_000001_create_cache_table',1);
INSERT INTO migrations VALUES(3,'0001_01_01_000002_create_jobs_table',1);
INSERT INTO migrations VALUES(4,'2025_08_14_170933_add_two_factor_columns_to_users_table',1);
INSERT INTO migrations VALUES(5,'2026_04_24_121027_create_documents_table',2);
INSERT INTO migrations VALUES(6,'2026_04_24_121031_add_role_to_users_table',2);
INSERT INTO migrations VALUES(7,'2026_04_24_124218_add_status_to_users_table',3);
INSERT INTO migrations VALUES(8,'2026_04_25_034911_create_career_jobs_table',4);
INSERT INTO migrations VALUES(9,'2026_04_25_035414_create_leads_table',5);
INSERT INTO migrations VALUES(10,'2026_05_01_180134_create_posts_table',6);
INSERT INTO migrations VALUES(11,'2026_05_01_183121_create_testimonials_table',7);
INSERT INTO migrations VALUES(12,'2026_05_01_184355_create_ticket_replies_table',8);
INSERT INTO migrations VALUES(13,'2026_05_01_184355_create_tickets_table',8);
INSERT INTO users VALUES(1,'Admin Advisor','admin@taxfilinghub.com',NULL,'$2y$12$I0Z6QAoFkFK0Htd5m0yXdewcuFVD1CKU4IQA4rJa0gTND6lypCIm6','hQt17B6NplbMxbc1SIwyr7hii0E0u02XLJT93FCEzdVNkQpJN7EcTNMRu7iL','2026-04-24 12:18:43','2026-04-24 12:46:46',NULL,NULL,NULL,'admin','approved',NULL,NULL);
INSERT INTO users VALUES(2,'John Client','client@taxfilinghub.com',NULL,'$2y$12$Dfd7fMWSzf4OBGERcBdOWeN40OoJNvG7eGRqbpt93ik3nNy2hm5Uq','EkoOtpcQaetXm3xeAvDZKudpT6461WA0JRlsEe9QOHAz8OpcJKEBPZTbdaA1','2026-04-24 12:18:43','2026-04-24 12:46:46',NULL,NULL,NULL,'user','approved',NULL,NULL);
INSERT INTO users VALUES(3,'Zeus Bauer','duqamanet@mailinator.com',NULL,'$2y$12$DrDM0W651FY5t2CBrLolReISAQnL1EpPpzMpwfUGem0ECl2kNLW2O',NULL,'2026-05-01 18:10:33','2026-05-01 18:12:09',NULL,NULL,NULL,'user','approved',NULL,NULL);
INSERT INTO sessions VALUES('hMGQKddThq8Sf8hkcRIsboJ3QHFZjm9VWiLe0Z4l',1,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36','eyJfdG9rZW4iOiJFUlNXSkFubThqZmFXMTE1NWlzSlJIbEsxQWxaSFFJQk9hN0ZRa1RQIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MX0=',1777659112);
INSERT INTO sessions VALUES('LrEdgwtooKOAEvAJmZgYoZ94ual4DQEoFIsruYVG',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36','eyJfdG9rZW4iOiJGMFY0YVh4MjN3eVJvRGEzb1draVlQaTJPbXBkWHVmZ3VlOUhRM3hJIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvdGF4ZmVlbGluZ2h1Yi50ZXN0XC9yZWdpc3RlciIsInJvdXRlIjoicmVnaXN0ZXIifX0=',1777663223);
INSERT INTO cache VALUES('tax-filing-hub-cache-d64440d852dab48f831a48f7b3d0d4c2:timer','i:1777660825;',1777660825);
INSERT INTO cache VALUES('tax-filing-hub-cache-d64440d852dab48f831a48f7b3d0d4c2','i:1;',1777660825);
INSERT INTO cache VALUES('tax-filing-hub-cache-8d0595ab4a8b65afbb977939fbca4674:timer','i:1777661584;',1777661584);
INSERT INTO cache VALUES('tax-filing-hub-cache-8d0595ab4a8b65afbb977939fbca4674','i:1;',1777661584);
INSERT INTO documents VALUES(1,2,'linear.pages','client-documents/R8henQm86fJBbLpY27dhHsk6Z8vNZmgbxqou0lhu.zip','Tax Filing',121364,'2026-04-24 12:48:40','2026-04-24 12:48:40');
INSERT INTO documents VALUES(2,2,'AA101024051914S_RC10112024.pdf','client-documents/kgPI23wGjApFoopN2YwbP9sVs1rfUXfmjsGuZu6X.pdf','Tax Filing',228522,'2026-04-24 13:11:54','2026-04-24 13:11:54');
INSERT INTO career_jobs VALUES(1,'Senior Tax Associate','Full-time','Purnia, Bihar','Lead direct & indirect tax engagements for SME and corporate clients. 3+ years of experience required.',1,'2026-04-25 03:50:45','2026-04-25 03:50:45');
INSERT INTO career_jobs VALUES(2,'Audit & Assurance Executive','Full-time','Purnia, Bihar','Plan and execute statutory and internal audits. CA Inter / Final candidates welcome.',1,'2026-04-25 03:50:45','2026-04-25 03:50:45');
INSERT INTO career_jobs VALUES(3,'Odio sit sint beatae','Internship','Adipisicing ut sapie','Ut dolore delectus',1,'2026-05-01 19:08:27','2026-05-01 19:08:27');
INSERT INTO leads VALUES(1,'Martin Wise','vorat@mailinator.com','9259987498','Ducimus cumque reru','Nemo ullamco omnis a',1,'2026-05-01 18:22:45','2026-05-01 18:32:35');
INSERT INTO posts VALUES(6,'Essential GST Compliance Checklist for 2024','essential-gst-compliance-checklist-for-2024','<h2>Understanding GST Compliance</h2><p>GST compliance is not just about filing returns; it is about maintaining accurate records and ensuring that every transaction is accounted for correctly. In 2024, the department has become more vigilant with automated notices.</p><h3>Key Deadlines to Remember</h3><ul><li>GSTR-1: 11th of every month</li><li>GSTR-3B: 20th of every month</li><li>Annual Return (GSTR-9): 31st December</li></ul><p>Make sure you reconcile your GSTR-2B with your purchase register every month to maximize your Input Tax Credit (ITC).</p>','Stay ahead of deadlines and avoid penalties with our comprehensive GST compliance guide.','https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80','published',1,'2026-05-01 18:28:16','2026-05-01 18:28:16','2026-05-01 18:28:16');
INSERT INTO posts VALUES(7,'Top 5 Tax Saving Investment Options under Section 80C','top-5-tax-saving-investment-options-under-section-80c','<h2>Saving Tax with Section 80C</h2><p>Section 80C remains the most popular way for individuals to reduce their taxable income. Here are the top 5 options:</p><ol><li><strong>Public Provident Fund (PPF):</strong> Risk-free and tax-free returns.</li><li><strong>ELSS Funds:</strong> Equity exposure with the shortest lock-in period of 3 years.</li><li><strong>National Savings Certificate (NSC):</strong> Fixed income backed by the government.</li><li><strong>Life Insurance Premiums:</strong> Protect your family while saving tax.</li><li><strong>SSY (Sukanya Samriddhi Yojana):</strong> Excellent for parents of a girl child.</li></ol>','Reduce your tax liability by up to ₹1.5 Lakh with these popular investment schemes.','https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80','published',1,'2026-05-01 18:28:16','2026-05-01 18:28:16','2026-05-01 18:28:16');
INSERT INTO posts VALUES(8,'Why Every Startup Should Consider Private Limited Incorporation','why-every-startup-should-consider-private-limited-incorporation','<h2>The Power of Incorporation</h2><p>Incorporating as a Private Limited company gives your startup a separate legal identity. This is crucial for credibility and scalability.</p><h3>Major Benefits</h3><ul><li><strong>Limited Liability:</strong> Protect your personal assets from business debts.</li><li><strong>Fundraising:</strong> VCs and Angel investors prefer Private Limited structures.</li><li><strong>Perpetual Succession:</strong> The company continues even if the owners change.</li></ul><p>While compliance is higher compared to a partnership, the long-term benefits far outweigh the costs.</p>','From limited liability to easier fundraising, discover why Private Limited is the gold standard.','https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80','published',1,'2026-05-01 18:28:16','2026-05-01 18:28:16','2026-05-01 18:28:16');
INSERT INTO posts VALUES(9,'A Guide to MSME Registration (Udyam) and its Benefits','a-guide-to-msme-registration-udyam-and-its-benefits','<h2>What is Udyam Registration?</h2><p>Udyam Registration is the new process for registering MSMEs in India. It is completely digital and paperless.</p><h3>Why Register?</h3><ol><li><strong>Collateral Free Loans:</strong> Easier access to credit from banks.</li><li><strong>Protection against Delayed Payments:</strong> Buyers must pay within 45 days.</li><li><strong>Subsidy on Patent Registration:</strong> 50% subsidy on government fees.</li><li><strong>Electricity Bill Concession:</strong> Available in many states for registered units.</li></ol>','Unlocking government subsidies, easier loans, and protection against delayed payments.','https://images.unsplash.com/photo-1454165833767-027ee6a7c38e?auto=format&fit=crop&w=1200&q=80','published',1,'2026-05-01 18:28:16','2026-05-01 18:28:16','2026-05-01 18:28:16');
INSERT INTO posts VALUES(10,'Avoiding Common Mistakes in Income Tax Return (ITR) Filing','avoiding-common-mistakes-in-income-tax-return-itr-filing','<h2>Common ITR Filing Errors</h2><p>Filing your ITR can be stressful, but avoiding these common pitfalls will make it smoother:</p><ul><li><strong>Not Reconciling with Form 26AS:</strong> Always check your TDS entries.</li><li><strong>Choosing the Wrong ITR Form:</strong> ITR-1 vs ITR-4 depends on your income sources.</li><li><strong>Forgetting to Verify:</strong> Your return is not valid until you e-verify it.</li><li><strong>Ignoring Exempt Income:</strong> Reporting agriculture income or PPF interest is mandatory even if tax-free.</li></ul>','Don''t let a small error lead to a big tax notice. Learn how to file correctly.','https://images.unsplash.com/photo-1586282391129-59a998fd03c0?auto=format&fit=crop&w=1200&q=80','published',1,'2026-05-01 18:28:16','2026-05-01 18:28:16','2026-05-01 18:28:16');
INSERT INTO testimonials VALUES(1,'Amit Sharma','Sharma Logistics Pvt Ltd','Tax Filing Hub transformed how we handle our GST compliance. Their team is professional and always ahead of deadlines. We can now focus on growing our fleet without worrying about tax notices.',3,'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',1,'published','2026-05-01 18:32:03','2026-05-01 18:38:46');
INSERT INTO testimonials VALUES(2,'Priya Kumari','Kumari Textiles & Crafts','Starting my small business in Patna was daunting, but the advisors here made the MSME registration and Trademark filing seamless. They are truly the best financial partners for startups in Bihar.',5,'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',1,'published','2026-05-01 18:32:03','2026-05-01 18:32:03');
INSERT INTO testimonials VALUES(3,'Dr. Rajesh Singh','City Care Multispeciality Hospital','Their expertise in hospital accounting and audit has been invaluable. Tax Filing Hub provides a level of detail and precision that we haven''t found anywhere else.',5,'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',1,'published','2026-05-01 18:32:03','2026-05-01 18:32:03');
INSERT INTO testimonials VALUES(4,'Suresh Mehra','Mehra Infra Projects','We''ve been with Tax Filing Hub for 3 years now. Their assistance during our Income Tax scrutiny was remarkable. Professional, ethical, and highly knowledgeable.',4,'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',0,'published','2026-05-01 18:32:03','2026-05-01 18:32:03');
INSERT INTO ticket_replies VALUES(1,1,2,'testing','2026-05-01 18:51:47','2026-05-01 18:51:47');
INSERT INTO ticket_replies VALUES(2,1,1,'teadsrtas','2026-05-01 18:52:16','2026-05-01 18:52:16');
INSERT INTO ticket_replies VALUES(3,1,1,'done','2026-05-01 19:09:08','2026-05-01 19:09:08');
INSERT INTO tickets VALUES(1,2,'Numquam eum laudanti','Obcaecati dolor dele','closed','high','2026-05-01 18:51:09','2026-05-01 19:09:08');
SET FOREIGN_KEY_CHECKS = 1;
