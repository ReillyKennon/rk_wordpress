<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'test_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '`K(fGA%)VKK($_O!EGjkvLtpvb$[ymMBWvoW3ov2L^PM63nOqk3*3A)([t=E|5hD');
define('SECURE_AUTH_KEY',  '1[gyQf8ok_=7g<`Vy+:T8+2w`h6RC34uuB,?a*A4okt:I<Hg9b1+iFGjUzacw~z3');
define('LOGGED_IN_KEY',    '[&e`rF*Cl{%Sm~}jWxZEz <pAe!Lko%I6p7[}?znf1d*y4%/HZ#^gaXfLa|wV1nS');
define('NONCE_KEY',        '$+qL`gjUX===[(r|*V_X6AA/(,Y?d)N[#Y i?aFu.T >]JkFLH~T,fFOZ[Al=xHY');
define('AUTH_SALT',        'v4tP=yQ?*}A0$T~3dC=qoQYRcS>2z)W><sN6cY=C$U/V}]|W?hw]Tu;e?gM~4c[t');
define('SECURE_AUTH_SALT', 'Yyd>c}g6i)STjsM~-hE3GSaQ(g_[R5*d*;=lcQh#gxKnn<}ID+dT]0/Z/t;0s?gF');
define('LOGGED_IN_SALT',   'D%1=`o`1mzzo88|CN4WFD{WSR}miQ5_Wx4,Worr_G$62=q?rQx&hg>k|t7p2XF,n');
define('NONCE_SALT',       'd^2I#i+&n6x,xN0}M7LniR[~sNd3F)+^*#E{k&rege%5tdY)R+CjXJ>K U(Dy]# ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
